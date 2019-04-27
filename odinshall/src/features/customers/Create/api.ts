export const createCustomer = async (
  firstName: string,
  surname: string,
  phoneNumber: string
) => {
  const response = await fetch("http://localhost:3001/customers/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      surname,
      phoneNumber
    })
  });
  return await response.json();
};
