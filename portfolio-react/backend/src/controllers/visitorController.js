import Visitor from '../models/Visitor.js';

// POST /api/visitor/increment
export const incrementVisitor = async (_, res) => {
  try {
    let record = await Visitor.findOne();
    if (!record) record = new Visitor({ count: 0 });
    record.count += 1;
    await record.save();
    res.json({ count: record.count });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};

// GET /api/visitor/count
export const getVisitorCount = async (_, res) => {
  try {
    const record = await Visitor.findOne();
    res.json({ count: record ? record.count : 0 });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
