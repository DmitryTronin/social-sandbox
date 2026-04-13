import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { execSync } from 'child_process';

function gitChangelogPlugin() {
  const virtualModuleId = 'virtual:changelog';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'git-changelog',
    resolveId(id: string) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id: string) {
      if (id !== resolvedVirtualModuleId) return;
      try {
        const log = execSync(
          'git log --pretty=format:\'%h||%s||%ai||%an\' -50',
          { encoding: 'utf-8' }
        );
        const commits = log
          .trim()
          .split('\n')
          .filter(Boolean)
          .map((line) => {
            const [hash, subject, date, author] = line.split('||');
            return { hash, subject, date, author };
          });
        return `export default ${JSON.stringify(commits)};`;
      } catch {
        return 'export default [];';
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), gitChangelogPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
