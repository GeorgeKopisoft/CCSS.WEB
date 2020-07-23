import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomContainer from '../../components/macro/CustomContainer';

class ErrorBoundary extends Component {

    state = ({
        existError: false,
    })

    componentDidCatch(error, errorInfo) {
        console.log("%cBoundary - Error controlado", "color:tomato", error, errorInfo);
        this.setState({ existError: true });
    }

    // Usar en el nivel más alto del arbol de componentes
    render() {

        if (this.state.existError) {
            return (
                <CustomContainer title="Oops error">
                    <Link to="/"
                        className="btn btn-action btn-lg"
                    >
                        Go to home
                    </Link>
                </CustomContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary
