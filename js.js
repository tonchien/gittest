function fcheckForm(){
	with(frm){
		var pas1=dn.value;
		var pas2=dn1.value;
		var tenx=ten.value;
		var mau=/^\d+$/;
		var mau1=/^[0-9A-Za-z]+@{1}$/
		if(tenx==''){
			alert("Mời bạn nhập tên đăng nhập")
			return false;
			}
		if(pas1==''){
			alert("Mời bạn nhập mật khẩu")
			return false;
			}
		if(pas2==''){
			alert("Mời bạn nhập  lại mật khẩu")
			return false;
			}
		if(pas1!=pas2){
			alert("Mật khẩu không khớp")
			return false;
			}
		if(ho.value==''){
			alert("Mời bạn nhập tên")
			return false;
			}
		if(el.value==''){
			alert("Mời bạn nhập số điện thoại")
			return false;
			} 
		if(mau.test(el.value)==false){
				alert("Dữ liệu phải là số");
				return false;
			}
		if(mau1.test(emai.value)==false){
			alert("email không hợp lệ")
			return false;
			}
		if(chi.value==''){
			alert("Mời bạn nhập địa chỉ")
			return false;
			}
		
  }	
}