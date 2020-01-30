var oimg = box.getElementsByTagName( "img" );
for ( var i = 0; i < oimg.length; i++ )
{
    oimg[ i ].style.cssText = "transform:rotateY(" + i * 36 + "deg) translateZ(500px)";
}