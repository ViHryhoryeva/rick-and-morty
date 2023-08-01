function getItemListByPage(page) {
    $.ajax(
        {
            url : 'https://rickandmortyapi.com/api/character/?page='.concat(page),
            type : 'GET',
            cache : false,
            dataType : 'json',
            contentType : "application/json",
            success : function (info) {
                showItemList(info);
            },
            error : function(e) {
                console.log(e);
            }
        }
    );
}
function getItemById(id) {
    $.ajax(
        {
            url : 'https://rickandmortyapi.com/api/character/'.concat(id),
            type : 'GET',
            cache : false,
            dataType : 'json',
            contentType : "application/json",
            success : function (info) {
                showCharacterInfo(info);
            },
            error : function(e) {
                console.log(e);
            }
        }
    );
}