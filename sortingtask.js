(function () {
    let btn = document.getElementById("sort"),
        arrayToSort = document.querySelector("#arrayToSort"),
        textToError = document.querySelector('#textError'),
        result = document.querySelector("#result")

    // <-- prepare
        const prepareArray = str => {
            let array = str.split(',')
            array = trimArray(array)
            array = filterEmptyArray(array)
            array = floatArray(array)
            return array 
        }
        const trimArray = array => array.map(element => element.trim())   
        const filterEmptyArray = array => array.filter(element => element != '')   
        const floatArray       = array => array.map(element => parseFloat(element))   
    // prepare -->
        
    // <-- validation
    const validation = array => {
        let resultOfValidation = true

        for(let item of array){
            if(isNaN(item)) {
                resultOfValidation = false
                break
            }
        }
        return resultOfValidation
    }
    const setError = () => {
        arrayToSort.classList.add('error')
        textToError.innerHTML = 'Error array format'
    }
    const clearError = () => {
        arrayToSort.classList.remove('error')
        textToError.innerHTML = ''
    }
    // validation -->

    const getResult = array => {
        let sortedArray = mergeSort(array);
        result.value = sortedArray.join(',')
    }

    init = () => {        
        let unsortedArray = prepareArray(arrayToSort.value)
        console.log('unsortedArray', unsortedArray)
        console.log('unsortedArray.length', unsortedArray.length)
        if(validation(unsortedArray)){
            clearError()
            getResult(unsortedArray)
        }else{
            setError()
        }
    }

    btn.addEventListener("click", init)
})()