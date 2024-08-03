import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <div className='containerr'>
     <form>
        <div>
          <p>Giriş yapınız:</p>
        </div>
        <div className="gir">
          <div>Adı:</div>
          <div><input id="giris" /></div>
        </div>
        <div className="gir">
          <div>Soyadı:</div>
          <div><input id="gir" /></div>
        </div>
        <button >Giriş</button>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage
