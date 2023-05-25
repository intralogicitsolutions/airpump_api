const ControlLibraryControlSchema = require('../model/control_library_control_model');
const func = require('../config');
const { ObjectId } = require('bson');
const getControlLibraryControlDetailService = () => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        await ControlLibraryControlSchema.find(function (err, result) {
            if (err) {
                console.log(err);
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        });
    });
};

const createControlLibraryControlDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryControl = new ControlLibraryControlSchema(body)
        await controlLibraryControl.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                await controlLibraryControl.save(function (err, result) {
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

const updateControlLibraryControlDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryControl = new ControlLibraryControlSchema(body)
        await controlLibraryControl.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                const query = { _id: body._id };
                await ControlLibraryControlSchema.findOneAndUpdate(query, body, { returnOriginal: false }, function (err, result) {
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

module.exports = { getControlLibraryControlDetailService, createControlLibraryControlDetailService, updateControlLibraryControlDetailService };
