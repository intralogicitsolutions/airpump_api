const ControlLibraryChapterSchema = require('../model/control_library_chapter_model');
const func = require('../config');
const { ObjectId } = require('bson');
const getControlLibraryChapterDetailService = () => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        await ControlLibraryChapterSchema.find(function (err, result) {
            if (err) {
                console.log(err);
                return resolve([{ err }]);
            }
            res.data = result;
            return resolve(res);
        });
    });
};

const createControlLibraryChapterDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryChapter = new ControlLibraryChapterSchema(body)
        await controlLibraryChapter.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                await controlLibraryChapter.save(function (err, result) {
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

const updateControlLibraryChapterDetailService = async (body) => {
    let res = { ...func.msg.successJson };
    return new Promise(async function (resolve) {
        const controlLibraryChapter = new ControlLibraryChapterSchema(body)
        await controlLibraryChapter.validate(async function (err, data) {
            if (err) {
                const keys = Object.keys(err.errors)
                keys.map(ele => {
                    func.msg.errJson['message'] = err.errors[ele].path + ' is ' + err.errors[ele].kind
                    return resolve(func.msg.errJson)
                })
            } else {
                const query = { _id: body._id };
                await ControlLibraryChapterSchema.findOneAndUpdate(query, body, { returnOriginal: false }, function (err, result) {
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

module.exports = { getControlLibraryChapterDetailService, createControlLibraryChapterDetailService, updateControlLibraryChapterDetailService };
