let stuff = ['adidas', 'gucci', 'converse', 'chanel'];

let option = prompt('Lựa Chọn? (C, R, U, D)').toUpperCase();

switch(option){
    case 'C':
        let new_item = prompt('new item: ');
        stuff.push(new_item);
        break;
    case 'R':
        for(var i=0;i<stuff.length;i++){
            console.log(stuff[i]);
        }
        break;
    case 'U':
        let update_key = prompt('Vị Trí Cần Sửa? (1, 2, 3, 4)');
        // kiểm tra nhập ký tự là số hay chữ
        if(update_key.toUpperCase() != update_key.toLowerCase()){
            alert('Chỉ Nhập Ký Tự Số( 1, 2, 3, 4)');
        }else{
            // kiểm tra nhập khác 1, 2, 3, 4 và số thập phân (vd: 2.3; 1.2)
            if(update_key != 1 && update_key != 2 && update_key != 3 && update_key != 4){
                alert('Chỉ Nhập vị trí( 1, 2, 3, 4)');
            }else{
                let updated_item = prompt('Update: ');
                stuff[update_key-1] = updated_item;
            }
        }
        break;
    case 'D':
        let delete_key = prompt('Vị Trí Cần Xóa? (1, 2, 3, 4)');
        if(delete_key.toUpperCase() != delete_key.toLowerCase()){
            alert('Chỉ Nhập Ký Tự Số( 1, 2, 3, 4)');
        }else{
            // kiểm tra nhập khác 1, 2, 3, 4 và số thập phân (vd: 2.3; 1.2)
            if(delete_key != 1 && delete_key != 2 && delete_key != 3 && delete_key != 4){
                alert('Chỉ Nhập vị trí( 1, 2, 3, 4)');
            }else{
                stuff.splice(delete_key-1,1);
            }
        }
        break;
    default:
        alert('Không có Option: "'+option+'". Chọn Option (C, R, U, D)')
}

for(var i=0; i<stuff.length;i++){
    console.log(i, stuff);
}
