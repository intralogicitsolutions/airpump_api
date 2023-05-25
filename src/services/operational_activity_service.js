const OperationalActivitySchema = require('../model/operational_activity_model');
const func = require('../config');
const getOperationalActivityDetailService = () => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        await OperationalActivitySchema.find(function (err, result) {
            if (err) {
                console.log(err);
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        });
    });
};

const createOperationalActivityDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const operationalActivity = new OperationalActivitySchema(body)
        await operationalActivity.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                await operationalActivity.save(function (err, result) {
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

const updateOperationalActivityDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        if (body.is_status_update) {
            const query = { _id: body._id };
            let update = {};
            update = { state: body.state }
            await OperationalActivitySchema.findOneAndUpdate(query, update, { returnOriginal: false }, function (err, result) {
                if (err) {
                    return resolve([{ err }]);
                }
                res.data = result;
                return resolve(res);
            })
        } else {
            const operationalActivity = new OperationalActivitySchema(body)
            await operationalActivity.validate(async function (err, data) {
                if (err) {
                    const keys = Object.keys(err.errors)
                    keys.map(ele => {
                        func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                        return resolve(func.msg.errJson)
                    })
                } else {
                    const query = { _id: body._id };
                    let update = {};
                    update = body
                    await OperationalActivitySchema.findOneAndUpdate(query, update, { returnOriginal: false }, function (err, result) {
                        if (err) {
                            return resolve([{ err }]);
                        }
                        res.data = result;
                        return resolve(res);
                    })
                }
            })
        }

    });
};

const deleteOperationalActivityDetailService = async (id) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const query = { _id: id };
        await OperationalActivitySchema.deleteOne(query, function (err, result) {
            if (err) {
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        })

    });
};
module.exports = { getOperationalActivityDetailService, createOperationalActivityDetailService, updateOperationalActivityDetailService, deleteOperationalActivityDetailService };
