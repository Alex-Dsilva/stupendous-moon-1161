const ImageToBase64 = async(file) => {

    let reader = new FileReader();
    reader.readAsDataURL(file);

    const data = new Promise((res, rej)=>{
        reader.onload = ()=> res(reader.result)
        reader.onerror = ()=> rej(err)
    })

    return data

  };

  export {ImageToBase64}