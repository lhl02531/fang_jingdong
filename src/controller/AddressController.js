/*
 *@Description: address controller
 */

const Address = require("../models/Address");

/**
 * 创建新地址
 * @param {Object} data     前端传来的地址详细信息
 * @param {String} userId   用户id
 * @param {String} userName 用户名
 */
async function createAddress(data, userId, userName) {
  const { isDefault } = data;
  if (isDefault) {
    const result = await Address.find({ uid: userId, isDefault }).updateOne({
      isDefault: false,
    });
  }
  const newAddress = await Address.create({
    uid: userId,
    username: userName,
    // 解构语法， 不行再拆开一个个写
    ...data,
  });
  return newAddress;
}

/**
 * 返回用户全部的地址
 * @param {string} userId  用户id
 * @returns
 */
async function getAllAddressByUid(userId) {
  const addressList = await Address.find({ uid: userId }).sort({
    _id: 1,
    updatedAt: -1,
  });
  return addressList;
}

/**
 * 根据地址id 返回地址
 * @param {string} aid 地址id
 */
async function getAddressByAid(aid) {
  const address = await Address.findById(aid);
  return address;
}

/**
 * 根据地址id 更新地址
 * @param {string} aid 地址id
 * @param {string} userId 用户id
 * @param {Objecct} data 前端传来的地址信息
 */
async function updateAddressByAid(aid, userId, data) {
  // console.log('更新地址 data', data)
  const { isDefault } = data;
  if (isDefault) {
    const result = await Address.find({
      uid: userId,
      isDefault,
    }).updateOne({ isDefault: false });
  }
  const newAddress = await Address.findOneAndUpdate(
    { _id: aid, uid: userId },
    { ...data },
    { new: true }
  );
  return newAddress;
}

async function delAddressByAid(aid, userId) {
  const result = await Address.deleteOne({ _id: aid, uid: userId });
  return result;
}

/**
 * 获取用户地址数组的第一个匹配
 * @param {*} userId
 * @returns
 */
async function getAddressByUid(userId) {
  console.log("获取个人的单个地址", userId);
  const address = await Address.find({ uid: userId }).limit(1);

  return address;
}

/**
 * 获取用户默认地址
 * @param {*} userId
 * @returns
 */
async function getDefaultAddress(userId) {
  let address = null;
  address = await Address.find({ uid: userId, isDefault: true });
  if (address.length <= 0) {
    address = await Address.find({}).sort({ _id: 1 }).limit(1);
  }
  return address;
}

module.exports = {
  createAddress,
  getAllAddressByUid,
  getAddressByAid,
  updateAddressByAid,
  getAddressByUid,
  getDefaultAddress,
  delAddressByAid,
};
