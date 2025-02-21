console.log("hello");

const detectPackage = () => {
  const _ = [
    Buffer.from("U2VjdXJpdHkgQWxlcnQ=").toString(),
    Buffer.from("RGVwZW5kZW5jeSBDb25mdXNpb24=").toString(),
  ];
  return _[0] + ": " + _[1];
};

module.exports = {
  initialize: () => {
    detectPackage();
    return "Package loaded";
  },
};
