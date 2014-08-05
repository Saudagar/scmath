CKEDITOR.plugins.add('scmath', 
{
	init: function( editor )
        {
			var iframeWindow = null, iframe = null;
           var me = this;
           CKEDITOR.dialog.add( 'scmath', function ()
           {
              return {
                 title : 'Equation Editor',
                 minWidth : 550,
                 minHeight : 325,
				 allowedContent: true,
                 contents :
                       [
                          {
                             id : 'iframe',
                             label : 'Equation Editor',
                             expand : true,
                             elements :
                                   [
                                      {
                                         type : 'iframe',
                                         src : me.path + 'browser/browser.html',
                                         style : 'height:350px;width:575px',
                                         onContentLoad : function() {
                                            // Iframe is loaded...
											iframe = document.getElementById( this._.frameId );
											console.log("iframeiframeiframeiframe >>." + iframe);
											iframeWindow = iframe.contentWindow;
                                         }
                                      }
                                   ]
                          }
                       ],
                 onOk : function()
                 {
					console.log("In okay...");
                    // Notify your iframe scripts here...
					var dialog = this, mathjaxInput = dialog.element;
				console.log("riz iframe......" + iframeWindow.document.getElementById('MathOutput').innerHTML );
				editor.insertHtml( iframeWindow.document.getElementById('MathOutput').innerHTML );
				
				var oIFrame = editor.document.createElement( 'iframe' );
				
				//editor.insertHtml( " $$ \\sqrt(4) $$ ");
				//var y = x.contentWindow.document;
				//console.log("MathOutput....MathOutput.." + iframeWindow.document.getElementById('MathOutput').innerHTML);
				//console.log("iframe onOk >>." + iframe);
				
				/*for(var x in dialog) {
					//console.log(x + " ----------- " + dialog[x]);
					if(x == '_') {
						for(var z in dialog._) {							
							var abcd = dialog._[z];
							console.log(z + " ========== " + abcd);
							if("contents" == z) {
								for(var y in abcd) {									
									var oIFrame = abcd[y];
									console.log(y + " ******************* " + oIFrame );
									if("iframe" == y) {
										for(var a in oIFrame) {
											console.log(a + " ***>>> " +  oIFrame[a]);
										}
									}
								}
							}
						}
					}
				}*/
				var mathObjectId = MathJax.Hub.getAllJax("MathOutput");
				//console.log("riz iframe.." + iframe.document.riz);
           /* if (dialog.insertMode) {

                var math = dialog.getValueOf( 'input-tab', 'mathInput' )

                var mathObjectId = MathJax.Hub.getAllJax("MathOutput").length

                // this element is our mathjax-source container
                var content = editor.document.createElement('div')
                    content.setAttribute('class', 'math-output')
                    content.setAttribute('id', 'formula-'+ mathObjectId)
                // this element gets replaced by the mathjax-renderer
                var preview = editor.document.createElement('span')
                    preview.setAttribute('class', 'math-preview')
                    preview.setText(math)
                content.append(preview)

                editor.insertElement( content )
            } else {
                dialog.commitContent( mathjaxInput )
            }*/

            MathJax.Hub.Typeset()


                 }
              };
           } );

            var dialogObj = editor.addCommand( 'scmath', new CKEDITOR.dialogCommand( 'scmath' ) );

            editor.ui.addButton( 'scmath',
            {
                label: 'Equation Editor',
                command: 'scmath',
                icon: this.path + 'icons/fvonx.png'
            } );
        }
    } );

