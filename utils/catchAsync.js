/**
 * @swagger
 * tags:
 * name: catchAsync
 * description: catchAsync is used to catch the error from the async function and pass it to the next function
 *              Importent: All Methods get(getBooks), post(saveBook), patch(updateBook), delete(deleteBook)
 * **/

module.exports = fn => {
    return () => {
        fn().catch();
    }
}