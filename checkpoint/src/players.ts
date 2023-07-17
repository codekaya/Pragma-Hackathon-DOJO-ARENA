const contentLength = BigInt(event.data[1]);
const tagLength = BigInt(event.data[2 + Number(contentLength)]);
const timestamp = block.timestamp;
const blockNumber = block.block_number;

// parse content bytes
try {
  content = hexStrArrToStr(event.data, 2, contentLength);
} catch (e) {
  console.error(`failed to decode content on block [${blockNumber}]: ${e}`);
  return;
}

// parse tag bytes
try {
  tag = hexStrArrToStr(event.data, 3 + Number(contentLength), tagLength);
} catch (e) {
  console.error(`failed to decode tag on block [${blockNumber}]: ${e}`);
  return;
}

// post object matches fields of Post type in schema.gql
const post = {
  id: `${author}/${tx.transaction_hash}`,
  player,
  health,
  tag,
  tx_hash: tx.transaction_hash,
  created_at: timestamp,
  created_at_block: blockNumber
};

// table names are `lowercase(TypeName)s` and can be interacted with sql
await mysql.queryAsync('INSERT IGNORE INTO posts SET ?', [post]);
}