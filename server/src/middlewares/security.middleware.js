export const rejectUnsupportedMethod = (req, res) => {
  res.set("Allow", "GET");
  return res.status(405).json({
    success: false,
    message: "Method not allowed",
  });
};
