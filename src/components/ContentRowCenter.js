import React from 'react';
import GenresInDb from './GenresInDb';
import QuienesSomos from './QuienesSomos';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <QuienesSomos />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;