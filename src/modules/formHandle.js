export const formHandle = () => {
    function handleFormSubmit(event) {
        event.preventDefault()
        console.log('Отправка!')
      }
      
      const applicantForm = document.getElementById('form-consult')
      applicantForm.addEventListener('submit', handleFormSubmit)
}