$(document).ready(function() {
    function closeAllGalleries() {
        $('.image-gallery').hide();
        $('.static-element').hide();
        $('.folder').removeClass('active');
    }

    function updateStaticElementPosition(element, position, folderHeight, folderWidth, parentHeight, parentWidth) {
        let topPercent, leftPercent;
        let windowWidth = $(window).width();
        
        if (windowWidth > 1200) {
            topPercent = ((position.top + folderHeight - 70) / parentHeight) * 100;
            leftPercent = (position.left / parentWidth + 0.5) * 100;
        } else if (windowWidth > 900) {
            topPercent = ((position.top + folderHeight + 2800) / parentHeight) * 100;
            leftPercent = (position.left / parentWidth + 0.3) * 100;
        } else if (windowWidth > 600) {
            topPercent = ((position.top + folderHeight + 2800) / parentHeight) * 100;
            leftPercent = (position.left / parentWidth + 0.1) * 100;
        } else {
            topPercent = ((position.top + folderHeight + 20) / parentHeight) * 100;
            leftPercent = (position.left / parentWidth) * 100;
        }

        element.css({
            top: topPercent + '%',
            left: leftPercent + '%',
            position: 'absolute'
        }).show();
    }

    $('.folder').click(function() {
        let folderId = $(this).attr('id');
        let isActive = $(this).hasClass('active');

        closeAllGalleries();

        if (!isActive) {
            if (folderId === 'graphic-design') {
                let position = $(this).position();
                let folderHeight = $(this).height();
                let folderWidth = $(this).width();
                let parentHeight = $(this).parent().height();
                let parentWidth = $(this).parent().width();

                let staticElement = $(this).find('.static-element');

                updateStaticElementPosition(staticElement, position, folderHeight, folderWidth, parentHeight, parentWidth);
            }
            $('#' + folderId + '-gallery').show();
            $(this).addClass('active');
        }
    });

    $('.graphic-design').draggable({
        containment: ".gallery-area"
    });

    $('.illustration-img').draggable({
        containment: ".gallery-area"
    });
});
