
window.Mercadopago.setPublishableKey("TEST-2712b6db-abd7-4467-99dd-31caae906bb4");
const mp = new MercadoPago('TEST-2712b6db-abd7-4467-99dd-31caae906bb4');


const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Número do cartão"
  }).mount('cardNumber');
  
  const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "MM/YY",
  }).mount('expirationDate');
  
  const securityCodeElement = mp.fields.create('securityCode', {
    placeholder: "Código de segurança"
  }).mount('securityCode');

  (async function getIdentificationTypes() {
    try {
      const identificationTypes = await mp.getIdentificationTypes();

      const identificationTypeElement = document.getElementById('docType');

      createSelectOptions(identificationTypeElement, identificationTypes);

    } catch (e) {
      return console.error('Error getting identificationTypes: ', e);
    }
})();

function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {

    const { label, value } = labelsAndKeys;

    elem.options.length = 0;

    const tempOptions = document.createDocumentFragment();

    options.forEach(option => {
      const optValue = option[value];
      const optLabel = option[label];

      const opt = document.createElement('option');
      opt.value = optValue;
      opt.textContent = optLabel;

      tempOptions.appendChild(opt);
    });

    elem.appendChild(tempOptions);
}  