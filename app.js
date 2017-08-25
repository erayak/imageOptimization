    
    // Library
    const prompt = require('prompt');
    const fs = require('fs');
    const sharp = require('sharp');

    // Prompt Start
    prompt.start();

    console.log("Do you start? ( yes,no )");

    prompt.get(['status'], (err, result) => {

        if( result.status === 'yes' )
        {

            fs.rmdir(`outputs`, ( ex ) => {

                fs.readdir(`AddOptimizeImages/`, ( error, files ) => {

                    fs.mkdir(`outputs`, ( err ) => {

                        let getOptimizeImageSave = 0;
                        let getOptimizeImageSaves = () => {

                            if( getOptimizeImageSave != files.length )
                            {
                                sharp(`AddOptimizeImages/${files[getOptimizeImageSave]}`)
                                .resize(320, 240)
                                .toFile(`outputs/${ getOptimizeImageSave + 1 }`, (err, info) => {
                                    
                                    getOptimizeImageSave++;
                                    return getOptimizeImageSaves();
                                
                                });

                            }
                            else
                                console.log(" SUCCESSFUL => In the outputs file ");

                        };
                        getOptimizeImageSaves();

                    });

                });

            });
            
        }
        else
            console.log("Bye");

    });
