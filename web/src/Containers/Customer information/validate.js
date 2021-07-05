const validate = values =>{
    const errors ={}
    const {name,phone,adress,email}=values;
    if(!name)
    {
        errors.name='Vui lòng nhập họ và tên';
    }else if(name.length < 10 && name.trim() )
    {
        errors.name='Họ và tên phải có 10 kí tự';
    }

    if(!phone)
    {
        errors.phone='Vui lòng nhập số điện thoại';
    }
    else if(Number(phone) < 9)
    {
        errors.phone='Số điện thoại phải có 9 số ';
    }

    if(!adress)
    {
        errors.adress='Vui lòng nhập ngày nhập hàng';
    }else if(adress.length < 10 && adress.trim() )
    {
        errors.adress='Họ và tên phải có 10 kí tự';
    }

    if(!email)
    {
        errors.email='Vui lòng nhập email';
    }else if( email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    {
        errors.email = 'Email không hợp lệ'
    }

    return errors;
};

export default validate;