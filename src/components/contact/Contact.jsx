import React from 'react'
import { useEffect, useState, useRef } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import './Contact.css'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

let timeout;

function Contact({ showContact, setShowContact, contactPos, setContactPos }) {
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 9) + 1);
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 9) + 1);
  const [operation, setOperation] = useState(Math.floor(Math.random() * 2) + 1);
  const [inputNumber, setInputNumber] = useState("")
  const [showError, setShowError] = useState(false);

  const contactRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setContactPos(contactRef.current.offsetTop)
    }, 50)
  }, [contactPos])

  useEffect(() => {
    if (number1 < number2) {
      const number3 = number1;
      setNumber1(number2);
      setNumber2(number3);
    }
  }, [number1, number2])

  return (
    <div className='contact-container' ref={contactRef}>
      <h1 className='contact title' id='contact'>Contact</h1>

      <div className='contact-box'>
        <div className='contacts'>
          <div className='contact-list'>
            <p serial="1.">Contact us for orphan drug <strong>commercialization</strong> in Hungary</p>
            <p serial="2.">Contact us for <strong>marketing & sales</strong> services of oncology, urology and hospital injectables in Hungary (generics & originator products)</p>
            <p serial="3.">Contact us for <strong>out-licensing opportunities</strong> in niche generic oncology and hospital injectables for global markets (<em>Megestrol acetate</em> 160 mg tablets, <em>Hydroxyurea</em> 500mg capsules, <em>Calcium-folinate</em> 100mg, 500mg vials, <em>Temozolomide</em> capsules 20mg, 100mg, 140mg, 180mg, 240mg)</p>
            <p serial="4.">Contact us in case of any appearance of <strong>side effects or adverse events</strong> <em>(Mellékhatásbejelentés)</em></p>
          </div>

          {showContact ?
            <div className='contact'>
              <div>
                <p className='contact subtitle'>
                  Our Address:
                </p>

                <p className='contact text'>Hungarian Head Office</p>
                <p className='contact text'>Bartók Béla út 15a</p>
                <p className='contact text'>1114 Budapest</p>
                <p className='contact text'>Hungary</p>
              </div>

              <div>
                <p className='contact subtitle'>
                  Business Development:
                </p>

                <p className='contact text phone'>
                  <PhoneInTalkOutlinedIcon />+36 1 209 5927
                </p>

                <p className='contact text'>
                  <a href="mailto:info@pharma-center.hu"><MailOutlinedIcon />info@pharma-center.hu</a>
                </p>
              </div>

              <div>
                <p className='contact subtitle email1'>
                  Side-effects / Adverse events:
                </p>
                <p className='contact subtitle email2'>
                  (Mellékhatásbejelentés)
                </p>

                <p className='contact text'>
                  <a href="mailto:radmedpharma@radmedpharma.hu"><MailOutlinedIcon />radmedpharma@radmedpharma.hu</a>
                </p>
              </div>
            </div>
            :
            <div className='captcha'>
              <p className='captcha-text'>Contact data is hidden. Solve the captcha, to show it:</p>
              <p className='captcha-text hun'>Mellékhatásbejelentéshez kérjük, oldja meg a lenti feladványt:</p>
              <div>
                <p>{number1} {operation === 1 ? "+" : "-"} {number2} = </p>
                <input type="number" value={inputNumber} onChange={e => {
                  if (e.target.value.length > 2) {
                    e.target.value = e.target.value.substring(0, 2);
                    setInputNumber(e.target.value);
                  } else setInputNumber(e.target.value);
                }}></input>
                <button onClick={() => {
                  let result = operation === 1 ? number1 + number2 : number1 - number2;
                  if (parseInt(inputNumber) === result) {
                    setShowError(false);
                    setShowContact(true);
                  } else {
                    setShowError(true);
                    clearTimeout(timeout);
                    timeout = setTimeout(() => setShowError(false), 3800)
                  };
                }}>Send</button>
                <button className='refresh' onClick={() => {
                  setNumber1(Math.floor(Math.random() * 9) + 1);
                  setNumber2(Math.floor(Math.random() * 9) + 1);
                  setOperation(Math.floor(Math.random() * 2) + 1);
                  setShowError(false);
                }}><CachedIcon /></button>
                {showError && <p className='captcha-error'>Wrong! You can do it, I believe in You!</p>}
              </div>
            </div>
          }
        </div>

        <div className='maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21571.4305656451!2d19.051971!3d47.481559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc4da3cd027f%3A0x58792731bd9490a7!2zQnVkYXBlc3QsIEJhcnTDs2sgQsOpbGEgw7p0IDE1YSwgMTExNCBIdW5nYXJ5!5e0!3m2!1sen!2sus!4v1654590041129!5m2!1sen!2sus" title="contactMap" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact