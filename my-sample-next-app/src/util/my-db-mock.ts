export function selectUser(userId: string) {
  const users = [
    { userId: '001', name: 'user001' },
    { userId: '002', name: 'user002' },
    { userId: '003', name: 'user003' },
  ];

  return users.find((user) => user.userId === userId);
}
