import businesses from "./customers.js";

const bigSpenders = businesses.filter((business) =>
  business.orders.some((order) => order >= 9000)
);

const DOMbigSpenders = bigSpenders.map((business) => ({
  fullName: Object.values(business.purchasingAgent).reverse().join(" "),
  phoneWork: business.phoneWork,
  orders: business.orders.reverse().join(" "),
  companyName: business.companyName,
  companyIndustry: business.companyIndustry,
  addressZipCode: business.addressZipCode,
  addressStateCode: business.addressStateCode,
  addressFullStreet: business.addressFullStreet,
  addressCity: business.addressCity,
}));

const makeDOMcontainerBigSpenders = (newObj) => {
  return `
    <div>
        <h3>${newObj.fullName}</h3>
        <section>${newObj.phoneWork}</section>
        <section>${newObj.orders}</section>
        <section>${newObj.companyName}</section>
        <section>${newObj.companyIndustry}</section>
        <section>${newObj.addressZipCode}</section>
        <section>${newObj.addressStateCode}</section>
        <section>${newObj.addressFullStreet}</section>
        <section>${newObj.addressCity}</section>
    </div>
    <hr/>
    `;
};

console.log(bigSpenders);

export default { DOMbigSpenders, makeDOMcontainerBigSpenders };
