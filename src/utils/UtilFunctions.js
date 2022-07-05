
// Function to validate an email address with regex
const validateEmail = (email) => {
  //eslint-disable-next-line
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
   return (true)
  }   
  
  return (false)
}

export { validateEmail }