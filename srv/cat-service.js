module.exports = srv => {

    if (srv.name === 'CatalogService') {
        srv.after('READ', 'Books', each => {
            if (each.stock > 500) each.title = each.title + ' (5% off!)' 
        })
    }

}