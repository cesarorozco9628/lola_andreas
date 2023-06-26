

function hash_text(text){
    const myPassword = cipher('morganamx')
     return myPassword(text)
}

const close_modal_mgn = (id) => {
    const modal_mgn = document.getElementById(id);  
    modal_mgn.remove();
}

const open_modal_mgn = (id) => {
    const modal_mgn = document.getElementById(id);
    modal_mgn.style.display = 'flex'
}

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}
    

const put_params_bulding = (data) => {
    let { username ,id, price, ubication, email, name, phone } = data;
    let width_container = '';
    let width_iframe = '';
    let div_ifrm = document.getElementById(id);
    let params = `${username?`username=${username}`:''}${price?`&price=${price}`:''}${ubication?`&ubication=${ubication}`:''}${email?`&email=${email}`:''}${name?`&name=${name}`:''}${phone?`&phone=${phone}`:''}`;
    params = hash_text(params);
    let body = document.querySelector('body');

    if (/Mobile/i.test(navigator.userAgent)) {
        let params_mob = params.length > 0 ? `?${params}` : ''
      let lnk = `https://morgana.mx/lola/registra_cotiza/${params_mob}`;
      window.open(lnk, '_blank');
    } else {
      width_container = 'div-width'
      width_iframe = 'iframe-width'
      // El código se está ejecutando en un dispositivo de escritorio

     body.innerHTML += `
     <div class="container-iframe-mgn " id="id_fiv_frm_mgn" style="">
        <div class="d-flex justify-content-end pb-2 div-width" id="id_container_close" onclick="close_modal_mgn('id_fiv_frm_mgn')">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.298246 1.70175C0.0994153 1.51462 1.19209e-07 1.2807 1.19209e-07 1C1.19209e-07 0.719298 0.0994153 0.48538 0.298246 0.298245C0.497076 0.0994153 0.730994 4.76837e-07 1 4.76837e-07C1.2924 4.76837e-07 1.52632 0.0994153 1.70175 0.298245L15.7018 14.2982C15.9006 14.4737 16 14.7076 16 15C16 15.269 15.9006 15.5029 15.7018 15.7018C15.5146 15.9006 15.2807 16 15 16C14.7193 16 14.4854 15.9006 14.2982 15.7018L0.298246 1.70175ZM14.2982 0.298245C14.4854 0.0994153 14.7193 4.76837e-07 15 4.76837e-07C15.2807 4.76837e-07 15.5146 0.0994153 15.7018 0.298245C15.9006 0.48538 16 0.719298 16 1C16 1.2807 15.9006 1.51462 15.7018 1.70175L1.70175 15.7018C1.52632 15.9006 1.2924 16 1 16C0.730994 16 0.497076 15.9006 0.298246 15.7018C0.0994153 15.5029 1.19209e-07 15.269 1.19209e-07 15C1.19209e-07 14.7076 0.0994153 14.4737 0.298246 14.2982L14.2982 0.298245Z" fill="white"/>
            </svg>
        </div>
        <iframe class="iframe-width" src="https://morgana.mx/lola/registra_cotiza/${params.length>0 ? `?${params}`:''}" id="id_ifm_mgn" width=""></iframe>
     </div>

      `
      open_modal_mgn(id);
    }
}



