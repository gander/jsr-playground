import type {Config} from 'release-it';

export default {
    git: {
        commit: true,
        commitArgs: ['-S'],
        tag: true,
        push: true,
    },
    github: {
        release: true,
    },
    npm: {
        publish: true,
    },
    hooks: {
        'before:init': 'bun run prepack',
    },
    plugins: {
        '@release-it/bumper': {
            out: {
                file: 'jsr.json',
                path: 'version',
            },
        },
    },
} satisfies Config;