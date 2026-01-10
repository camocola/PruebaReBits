import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vehiculos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VehicleController::index
 * @see app/Http/Controllers/VehicleController.php:14
 * @route '/vehiculos'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vehiculos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VehicleController::create
 * @see app/Http/Controllers/VehicleController.php:22
 * @route '/vehiculos/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\VehicleController::store
 * @see app/Http/Controllers/VehicleController.php:75
 * @route '/vehiculos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vehiculos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VehicleController::store
 * @see app/Http/Controllers/VehicleController.php:75
 * @route '/vehiculos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::store
 * @see app/Http/Controllers/VehicleController.php:75
 * @route '/vehiculos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VehicleController::store
 * @see app/Http/Controllers/VehicleController.php:75
 * @route '/vehiculos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VehicleController::store
 * @see app/Http/Controllers/VehicleController.php:75
 * @route '/vehiculos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
export const show = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vehiculos/{vehiculo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
show.url = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehiculo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    vehiculo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vehiculo: args.vehiculo,
                }

    return show.definition.url
            .replace('{vehiculo}', parsedArgs.vehiculo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
show.get = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
show.head = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
    const showForm = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
        showForm.get = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VehicleController::show
 * @see app/Http/Controllers/VehicleController.php:0
 * @route '/vehiculos/{vehiculo}'
 */
        showForm.head = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
export const edit = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vehiculos/{vehiculo}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
edit.url = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehiculo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    vehiculo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vehiculo: args.vehiculo,
                }

    return edit.definition.url
            .replace('{vehiculo}', parsedArgs.vehiculo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
edit.get = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
edit.head = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
    const editForm = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
        editForm.get = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VehicleController::edit
 * @see app/Http/Controllers/VehicleController.php:119
 * @route '/vehiculos/{vehiculo}/edit'
 */
        editForm.head = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
export const update = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vehiculos/{vehiculo}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
update.url = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehiculo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    vehiculo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vehiculo: args.vehiculo,
                }

    return update.definition.url
            .replace('{vehiculo}', parsedArgs.vehiculo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
update.put = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
update.patch = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
    const updateForm = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
        updateForm.put = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\VehicleController::update
 * @see app/Http/Controllers/VehicleController.php:131
 * @route '/vehiculos/{vehiculo}'
 */
        updateForm.patch = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\VehicleController::destroy
 * @see app/Http/Controllers/VehicleController.php:170
 * @route '/vehiculos/{vehiculo}'
 */
export const destroy = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vehiculos/{vehiculo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VehicleController::destroy
 * @see app/Http/Controllers/VehicleController.php:170
 * @route '/vehiculos/{vehiculo}'
 */
destroy.url = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vehiculo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    vehiculo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vehiculo: args.vehiculo,
                }

    return destroy.definition.url
            .replace('{vehiculo}', parsedArgs.vehiculo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::destroy
 * @see app/Http/Controllers/VehicleController.php:170
 * @route '/vehiculos/{vehiculo}'
 */
destroy.delete = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\VehicleController::destroy
 * @see app/Http/Controllers/VehicleController.php:170
 * @route '/vehiculos/{vehiculo}'
 */
    const destroyForm = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VehicleController::destroy
 * @see app/Http/Controllers/VehicleController.php:170
 * @route '/vehiculos/{vehiculo}'
 */
        destroyForm.delete = (args: { vehiculo: string | number } | [vehiculo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\VehicleController::importMethod
 * @see app/Http/Controllers/VehicleController.php:31
 * @route '/vehiculos/importar'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/vehiculos/importar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VehicleController::importMethod
 * @see app/Http/Controllers/VehicleController.php:31
 * @route '/vehiculos/importar'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::importMethod
 * @see app/Http/Controllers/VehicleController.php:31
 * @route '/vehiculos/importar'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VehicleController::importMethod
 * @see app/Http/Controllers/VehicleController.php:31
 * @route '/vehiculos/importar'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VehicleController::importMethod
 * @see app/Http/Controllers/VehicleController.php:31
 * @route '/vehiculos/importar'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
/**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
export const historial = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: historial.url(args, options),
    method: 'get',
})

historial.definition = {
    methods: ["get","head"],
    url: '/vehiculos/{id}/historial',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
historial.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return historial.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
historial.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: historial.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
historial.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: historial.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
    const historialForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: historial.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
        historialForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: historial.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VehicleController::historial
 * @see app/Http/Controllers/VehicleController.php:158
 * @route '/vehiculos/{id}/historial'
 */
        historialForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: historial.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    historial.form = historialForm
const VehicleController = { index, create, store, show, edit, update, destroy, importMethod, historial, import: importMethod }

export default VehicleController