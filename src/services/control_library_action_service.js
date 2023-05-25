const ControlLibraryActionSchema = require('../model/control_library_action_model');
const func = require('../config');
const getControlLibraryActionDetailService = () => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        await ControlLibraryActionSchema.find(function (err, result) {
            if (err) {
                console.log(err);
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        });
    });
};

const createControlLibraryActionDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryAction = new ControlLibraryActionSchema(body)
        await controlLibraryAction.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                await controlLibraryAction.save(function (err, result) {
                    if (err) {
                        return resolve([{ err }]);
                    }
                    res.data = result;
                    return resolve(res);
                })
            }
        })
    });
};

const updateControlLibraryActionDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryAction = new ControlLibraryActionSchema(body)
        await controlLibraryAction.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                const query = { _id: body._id };
                await ControlLibraryActionSchema.findOneAndUpdate(query, body, { returnOriginal: false }, function (err, result) {
                    if (err) {
                        return resolve([{ err }]);
                    }
                    res.data = result;
                    return resolve(res);
                })
            }
        })
    });
};

const deleteControlLibraryActionDetailService = async (id) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const query = { _id: id };
        await ControlLibraryActionSchema.deleteOne(query, function (err, result) {
            if (err) {
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        })

    });
};
module.exports = { getControlLibraryActionDetailService, createControlLibraryActionDetailService, updateControlLibraryActionDetailService, deleteControlLibraryActionDetailService };
