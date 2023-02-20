import React from 'react';
import "./blocs.scss";

function Blocs() {
  return (
    <div className='blocsDiv'>
        <article className='blocsDiv__1'>
            <div className='blocsDiv__1__img'>
                <img src="emilie_pauline_bintia_linkedout.png" alt="" />
            </div>
            <div className='blocsDiv__1__title'>
                Rencontre avec Pauline, Bintia et Emilie
            </div>
            <div className='blocsDiv__1__meta'>
                <div className='blocsDiv__1__meta__puce'>
                    Audit
                </div>
                <div className='blocsDiv__1__meta__date'>
                    15 septembre 2021
                </div>
            </div>
        </article>
        <article className='blocsDiv__2'>
            <div className='blocsDiv__2__title'>
                Cyber Stress : une grande étude sur le stress des Responsables Cyber
            </div>
            <div className='blocsDiv__2__descr'>
                Advens et le Club des Experts de la Sécurité de l'Information et du Numérique ont conduit...
            </div>
            
            <div className='blocsDiv__2__meta'>
                <div className='blocsDiv__2__meta__puce'>
                    Audit
                </div>
                <div className='blocsDiv__2__meta__date'>
                    15 septembre 2021
                </div>
            </div>
        </article>
        <article className='blocsDiv__3'>
            <div className='blocsDiv__3__img'>
                <img src="capza.png" alt="" />
            </div>
            <div className='blocsDiv__3__title'>
                Advens annonce la signature d’un accord d‘exclusivité avec Capza Growth Tech pour l’entrée au capital d’Advens
            </div>
            <div className='blocsDiv__3__descr'>
                Une opération inédite qui ouvre la voie à un nouveau modèle d’entreprise à impact sociétal...
            </div>
            <div className='blocsDiv__3__meta'>
                <div className='blocsDiv__3__meta__puce'>
                    Audit
                </div>
                <div className='blocsDiv__3__meta__date'>
                    15 septembre 2021
                </div>
            </div>
        </article>

    </div>
  )
}

export default Blocs