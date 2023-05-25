const ActionSchema = require('../model/action_model');
const func = require('../config');
const getActionDetailService = () => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        await ActionSchema.find(function (err, result) {
            if (err) {
                console.log(err);
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        });
    });
};

const createActionDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const action = new ActionSchema(body)
        await action.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                await action.save(function (err, result) {
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

const updateActionDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const action = new ActionSchema(body)
        await action.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                const query = { _id: body._id };
                await ActionSchema.findOneAndUpdate(query, body, { returnOriginal: false }, function (err, result) {
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
module.exports = { getActionDetailService, createActionDetailService, updateActionDetailService };
 