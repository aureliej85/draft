import React, { useState } from 'react';
import "./accordeon.scss";

function Accordeon() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [ hideClass1, setHideClass1] = useState("show");
  const [ hideClass2, setHideClass2] = useState("hide");
  const [ hideClass3, setHideClass3] = useState("hide");
  const [ hideClass4, setHideClass4] = useState("hide");


  function handleClick1() {
    isOpen1 ? setIsOpen1(false) : setIsOpen1(true);
    !isOpen1 ? setHideClass1("hide") : setHideClass1("show");
  }
  function handleClick2() {
    isOpen2 ? setIsOpen2(false) : setIsOpen2(true);
    !isOpen2 ? setHideClass2("hide") : setHideClass2("show");
  }
  function handleClick3() {
    isOpen3 ? setIsOpen3(false) : setIsOpen3(true);
    !isOpen3 ? setHideClass3("hide") : setHideClass3("show");
  }
  function handleClick4() {
    isOpen4 ? setIsOpen4(false) : setIsOpen4(true);
    !isOpen4 ? setHideClass4("hide") : setHideClass4("show");
  }

  return (
    <div className='accordeonDiv'>
      <article className='accordeonDiv__bloc bgBlue' id="firstAcc">  
        <div className={`'accordeonDiv__bloc__content' ${hideClass1}`}>
          <div className='accordeonDiv__bloc__content__title'>
            <div>
              Conseil

            </div>
            <div className='accordeonDiv__bloc__content__title__img'>
              <img src="BTNrond.png" alt="" />

            </div>
            
            
          </div>
          <div className='accordeonDiv__bloc__content__subtitle'>
          Vous accompagner dans la démarche sécurité
             
            </div>
          <div className='accordeonDiv__bloc__content__descr'>
          La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.
           
          </div>
         
        </div>
        <div className='accordeonDiv__bloc__head' onClick={handleClick1}>
          1
        </div>
      </article>

      <article className='accordeonDiv__bloc bgBlueDark' id="secondAcc">  
        <div className={`'accordeonDiv__content' ${hideClass2}`}>
        <div className='accordeonDiv__bloc__content__title'>
            <div>
              Conseil

            </div>
            <div>
              <img src="BTNrond.png" alt="" />

            </div>
            
            
          </div>
          <div className='accordeonDiv__bloc__content__subtitle'>
          Vous accompagner dans la démarche sécurité
             
            </div>
          <div className='accordeonDiv__bloc__content__descr'>
          La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.
           
          </div>
        </div>
        <div className='accordeonDiv__bloc__head' onClick={handleClick2}>
          2
        </div>
      </article>

      <article className='accordeonDiv__bloc bgOrange' id="thirdAcc">  
        <div className={`'accordeonDiv__content' ${hideClass3}`}>
        <div className='accordeonDiv__bloc__content__title'>
            <div>
              Conseil

            </div>
            <div>
              <img src="BTNrond.png" alt="" />

            </div>
            
            
          </div>
          <div className='accordeonDiv__bloc__content__subtitle'>
          Vous accompagner dans la démarche sécurité
             
            </div>
          <div className='accordeonDiv__bloc__content__descr'>
          La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.
           
          </div>
        </div>
        <div className='accordeonDiv__bloc__head' onClick={handleClick3}>
          3
        </div>
      </article>

      <article className='accordeonDiv__bloc bgOrangeDark' id="forthAcc">  
        <div className={`'accordeonDiv__content' ${hideClass4}`}>
        <div className='accordeonDiv__bloc__content__title'>
            <div>
              Conseil

            </div>
            <div>
              <img src="BTNrond.png" alt="" />

            </div>
            
            
          </div>
          <div className='accordeonDiv__bloc__content__subtitle'>
          Vous accompagner dans la démarche sécurité
             
            </div>
          <div className='accordeonDiv__bloc__content__descr'>
          La maitrise des risques numériques passe par la mise œuvre d’une démarche décurité à la fois organisée et formalisée.
           
          </div>
        </div>
        <div className='accordeonDiv__bloc__head' onClick={handleClick4}>
          4
        </div>
      </article>
      
    </div>
  )
}

export default Accordeon