// it uses the module ConsoleManager
var ConsoleManager = {
    onOpen() {
        alert( "Console is opened" );

    },
    onClose() {
        alert( "Console is closed" )
    },
    init() {
        var self = this;
        var x = document.createElement( 'div' );
        var isOpening = false, isOpened = false;
        Object.defineProperty( x, 'id', {
            get() {
                if ( !isOpening )
                {
                    self.onOpen();
                    isOpening = true;
                }
                isOpened = true;
            }
        } );
        setInterval( function () {
            isOpened = false;
            console.info( x );
            console.clear();
            if ( !isOpened && isOpening )
            {
                self.onClose();
                isOpening = false;
            }
        }, 100 )
    }
}

ConsoleManager.onOpen = function () {
    window.opener = null;
    window.open( '', '_self', '' );
    window.close();
}
ConsoleManager.onClose = function () {
    alert( "Console is closed" );
}
ConsoleManager.init();



window.onload = function () {
    //屏蔽键盘事件
    document.onkeydown = function () {
        var e = window.event || arguments[ 0 ];
        //F12
        if ( e.keyCode == 123 )
        {
            return false;
            //Ctrl+Shift+I
        } else if ( ( e.ctrlKey ) && ( e.shiftKey ) && ( e.keyCode == 73 ) )
        {
            return false;
            //Shift+F10
        } else if ( ( e.shiftKey ) && ( e.keyCode == 121 ) )
        {
            return false;
            //Ctrl+U
        } else if ( ( e.ctrlKey ) && ( e.keyCode == 85 ) )
        {
            return false;
        }
        // outlying onkeydown

    }
    document.onkeydown = function ( e ) {
        if ( e.ctrlKey && e.keyCode == 83 ) return false;
    }
    //屏蔽鼠标右键
    document.oncontextmenu = function () {
        return false;
    }
}