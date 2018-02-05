import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddBlock from '../components/AddBlock';

const mapStateToProps = (store) => ({
    categories: store.categories
});

const mapDispatchToProps = ({
    onAddClick: addTodo
});

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBlock);
