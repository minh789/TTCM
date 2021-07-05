const validate = values =>{
    const errors ={}
    const {id,name,price1,daygive,cout,gurantee,year}=values;
    if(!id)
    {
        errors.id='Vui lòng nhập ID';
    }else if(id.length < 4 && id.trim() )
    {
        errors.id='ID phải có 4 kí tự';
    }
    if(!name)
    {
        errors.name='Vui lòng nhập tên sản phẩm';
    }else if(name.length < 10 && name.trim() )
    {
        errors.name='Tên phải có 10 kí tự';
    }
    if(!price1)
    {
        errors.price1='Vui lòng nhập giá';
    }else if(Number(price1) < 1000000 )
    {
        errors.price1='Giá phải từ một triệu(1 triệu) trở lên';
    }
    if(!daygive)
    {
        errors.daygive='Vui lòng nhập ngày nhập hàng';
    }
    if(!cout)
    {
        errors.cout='Vui lòng nhập số lượng sản phẩm';
    }
    else if(Number(cout) < 10  )
    {
        errors.cout='Phải từ 10 sản phẩm trở lên ';
    }
    if(!gurantee)
    {
        errors.gurantee='Vui lòng nhập mã bảo hành';
    }else if(gurantee.length < 10 && gurantee.trim() )
    {
        errors.gurantee='Mã bảo hành phải có 10 kí tự';
    }
    if(!year)
    {
        errors.year='Vui lòng nhập năm bảo hành';
    }else if(year.length < 5 && year.trim() )
    {
        errors.year='Năm bảo hành phải có 5 kí tự';
    }

    return errors;
};

export default validate;