const ControlLibraryDomainSchema = require('../model/control_library_domain_model');
const func = require('../config');
const { ObjectId } = require('bson');
const getControlLibraryDomainDetailService = () => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        await ControlLibraryDomainSchema.find(function (err, result) {
            if (err) {
                console.log(err);
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        });
    });
};

const createControlLibraryDomainDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryDomain = new ControlLibraryDomainSchema(body)
        await controlLibraryDomain.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                await controlLibraryDomain.save(function (err, result) {
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

const updateControlLibraryDomainDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryDomain = new ControlLibraryDomainSchema(body)
        await controlLibraryDomain.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                const query = { _id: body.id };
                await ControlLibraryDomainSchema.findOneAndUpdate(query, body, { returnOriginal: false }, function (err, result) {
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

module.exports = { getControlLibraryDomainDetailService, createControlLibraryDomainDetailService, updateControlLibraryDomainDetailService };
