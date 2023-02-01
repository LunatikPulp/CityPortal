var count= 'yes';
                    setInterval( "time()",5000) ;
        
            function time(){
                $.ajax({ url: 'check.php', type: 'GET', data: { count :count },
                success: function (response)  { var result = JSON.parse(response);
                $('#all').text(result.all); $('#done').text(result.done) }
                       }) 
            }		 