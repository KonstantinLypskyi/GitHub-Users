export const Book = {
    list: () => '/',
    single: id => {
      const pattern = `/single_user/:id`;

      if (id) {
        return pattern.replace(':id', id)
      }
      
      return pattern;
    }
}