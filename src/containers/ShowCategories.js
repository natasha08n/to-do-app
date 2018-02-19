import { connect } from 'react-redux';

import { addCategory } from '../actions/categories';
import Categories from '../components/Categories';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    addCategory: addCategory
});

export const ShowCategories = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);

// сделать для компоненты едитор контейнер едит инфо и брать категории и все остальное 