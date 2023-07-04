export default function getListStudentIds(lists {
  if (Array.isArray(lists)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
