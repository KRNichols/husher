var BinaryWriter = require('./moduals/writer.js');
var BinaryReader = require('./moduals/reader.js');

var victim = "Hello World";

var writer = new BinaryWriter();
writer.writeUInt32(123);
writer.writeInt16(456);
writer.writeUInt8(10);
writer.writeFloat(7.5);
writer.writeDouble(7.7);
writer.writeStringZeroUtf8(victim);
writer.writeStringZeroUnicode(victim);

var buffer = writer.toBuffer();

console.log();
console.log("We are encoding the string ", victim);
console.log();
console.log(buffer);
console.log();
console.log("And now we decode");
console.log();

var reader = new BinaryReader(buffer);
console.log("UInt32 ", reader.readUInt32());
console.log("UInt16 ", reader.readInt16());
console.log("UInt8 ", reader.readUInt8());
console.log("Float ", reader.readFloat());
console.log("Double ", reader.readDouble());
console.log("ZeroUInt8 ", reader.readStringZeroUtf8());
console.log("ZeroUnicode ", reader.readStringZeroUnicode());
