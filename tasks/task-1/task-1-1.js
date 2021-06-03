process.stdin.setEncoding( 'utf8' );

process.stdin.on( 'data', ( line ) => {
    process.stdout.write( `${line.split('').reverse().join('').slice(2)}\n` );
});