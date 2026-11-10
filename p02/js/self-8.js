function log(message){
    console.log(message)

    log = function(message){
        console.log('[повтор]',  message)
    }
}

log('первое сообщение')
log('второе сообщение')
log('третье сообщение')
