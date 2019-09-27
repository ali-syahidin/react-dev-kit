#!/usr/bin/env node

require('yargs')
    .usage('$0 <command>', 'usage of package')
    .command(
        'test',
        'Test Command',
        () => {},
        argv => {
            require('./scripts/test')(argv);
        }
    )
    .epilogue(
        '🍰  Ali - Ali React Development Kits'
    )
    .help()
    .argv