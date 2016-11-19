$(function() {

	$(document).on('AjaxUploadDone', function() {
		updateCount();
	});

	function updateCount() {
		var $fields = $('#ProcessPageEdit .InputfieldFile, #ProcessPageEdit .InputfieldImage');
		$fields.each(function() {
			var count = $(this).find('.InputfieldFileList li, .gridImages li').length;
			var id =  $(this).find('input:file').attr('id');
			var f_name = id.substr(id.indexOf('_')+1);
			$('#Inputfield__' + f_name).val(count);
		});
		InputfieldDependencies($('.InputfieldForm:not(.InputfieldFormNoDependencies)'));
	}

});