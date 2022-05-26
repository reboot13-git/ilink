jQuery('#contactForm').on('submit',function(e){
    e.preventDefault();
    jQuery('#btnSubmit').html('Please wait...');
    jQuery('#btnSubmit').attr('disabled',true);
    jQuery.ajax({
      url:'https://script.google.com/macros/s/AKfycbwzKRxS0G34_z6myhbv0BtMvhcrr4Z90pYmjLZ8X2i_HxSWts0FW2gG7lmg50ZbTDrrjA/exec',
      type:'post',
      data:jQuery('#contactForm').serialize(),
      success:function(result){
        jQuery('#contactForm')[0].reset();
        jQuery('#btnSubmit').html('Thank You');
        jQuery('#btnSubmit').attr('disabled',false);
        //window.location.href='';
      }
    });
    });